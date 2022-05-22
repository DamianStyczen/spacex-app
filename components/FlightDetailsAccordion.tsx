import { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type FlightDetailsAccordionProps = {
  title: string;
  children?: ReactNode;
  disabled?: boolean;
};

export default function FlightDetailsAccordion({
  title,
  children,
  disabled,
}: FlightDetailsAccordionProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${title}-content`}
        id={`panel-${title}-header`}
        disabled={disabled}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

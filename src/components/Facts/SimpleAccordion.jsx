import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import  "./SimpleAccordion.css";

export default function SimpleAccordion() {
  return (
    <div div className={"accordionWrapper"}>
      <h1 className='facts'>FAQs</h1>
    <div className={"accordion"}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          styles={{width:"100px"}}
        >
          <Typography>Is QTify free to use?</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{color:'black !important'}}><Typography id="accordion1Details">
          Yes! It is 100% free, and has 0% ads!
          </Typography></Box>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className={"accordion"}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="accordion2Details">
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}

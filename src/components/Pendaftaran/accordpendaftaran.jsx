import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >No Ijazah</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >No SKHU</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Tahun tamat</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            type="text-" name="bidang" id="bidang" />
                    </div>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}

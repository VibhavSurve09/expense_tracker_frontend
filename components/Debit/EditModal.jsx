import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditForm from '../Forms/EditForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditDebitModal({
  showModal,
  setShowModal,
  reason,
  amount,
  isCredit,
  id,
}) {
  const handleClose = () => setShowModal(false);
  const [debitAmount, setDebitAmount] = React.useState(amount);
  const [debitReason, setDebitReason] = React.useState(reason);

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={showModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <Box sx={style}>
            <EditForm
              amount={debitAmount}
              setAmount={setDebitAmount}
              reason={debitReason}
              setReason={setDebitReason}
              isCredit={isCredit}
              id={id}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

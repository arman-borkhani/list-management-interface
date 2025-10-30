import Dialog from "../ui/Dialog";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ListModal = ({ open, onClose }: Props) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div>List modal content</div>
    </Dialog>
  );
};

export default ListModal;


import { createPortal } from 'react-dom';
import Cart from './Cart';



function CartModal({ title, actions, ref })
 {
  

  return createPortal(
    <dialog id="modal" ref={ref}>
      <h2>{title}</h2>
      <Cart  />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
};

export default CartModal;

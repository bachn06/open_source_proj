import { addToCart } from "app/purchaseSlide";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

AddToCartBtn.propTypes = {
	absolute: PropTypes.bool,
	product: PropTypes.object.isRequired,
	quantity: PropTypes.number,
	onClose: PropTypes.func,
};

AddToCartBtn.defaultProps = {
	absolute: false,
	quantity: 1,
};

function AddToCartBtn({ absolute, product, quantity, onClose }) {
	const dispatch = useDispatch();
	const { _id } = product;
	const isInCart = !!useSelector((state) =>
		state.purchase.cart.find((item) => item._id === _id)
	);
	const { isLogin } = useSelector((state) => state.users);
	const history = useHistory();

	const productCart = {
		productId: _id,
		quantity,
	};

	const onClosePreview = () => {
		if (onClose) onClose();
	};

	const onAddToCart = () => {
		if (isLogin) {
			dispatch(addToCart(productCart));
			onClosePreview();
			toast.success("Thêm sản phẩm thành công!!!");
		} else history.push("/user/login");
	};

	const renderBtn = () => {
		return isInCart ? (
			<Button className='add-cart-btn shadow-none'>Tùy chọn</Button>
		) : (
			<Button className='add-cart-btn shadow-none' onClick={onAddToCart}>
				Thêm vào giỏ hàng
			</Button>
		);
	};
	return (
		<>
			{absolute ? (
				<div className='add-cart-btn--wrap'>{renderBtn()}</div>
			) : (
				<>{renderBtn()}</>
			)}
		</>
	);
}

export default AddToCartBtn;

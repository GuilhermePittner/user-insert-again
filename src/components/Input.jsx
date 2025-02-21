const Input = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      className="w-full p-3 rounded-lg bg-[#ffffff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B8AE1] transition duration-200"
    />
  );
}

export default Input;
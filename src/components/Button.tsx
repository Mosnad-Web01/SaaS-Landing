interface Prop {
  Text: string;
}

const Button = ({ Text }: Prop) => {
  return (
    <button className="py-4 px-6 rounded-3xl shadow-custom outline-none dark:bg-[#1F1F1F] dark:text-white">
      {Text}
    </button>
  );
};

export default Button;

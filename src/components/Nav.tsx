const Nav = () => {
  return (
    <div className="w-[571px] h-[117px] bg-transparent max-w-xl mx-auto bg-red-400 flex items-end justify-center">
      <ul className="flex gap-6 px-8 py-6 bg-blue-300 rounded-[48px] mb-1 text-lg">
        <a href="#">
          <li className="font-medium">product</li>
        </a>
        <a href="#">
          <li className="font-medium">Integration</li>
        </a>
        <a href="#">
          <li className="font-medium">Demo</li>
        </a>
        <a href="#">
          <li className="font-medium">Pricing</li>
        </a>
        <a href="#">
          <li className="font-medium">Login</li>
        </a>
      </ul>
    </div>
  );
};

export default Nav;

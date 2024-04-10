export default function CountButton({ children, onClick }) {
  return (
    <div
      className="flex flex-1 justify-center items-center h-full cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default function HamBurgerIcon({ size, onClick }) {
    function IconLine() {
        return <div className={`rounded-md w-full h-full bg-black`}></div>;
    }

    const height = size - 3;
    const styles = {
        width: `${size}px`,
        height: `${height}px`,
        gap: `${height / 6}px`,
    };
    return (
        <div
            style={{
                ...styles,
            }}
            className="cursor-pointer flex flex-col md:hidden"
            onClick={onClick}
        >
            <IconLine />
            <IconLine />
            <IconLine />
        </div>
    );
}

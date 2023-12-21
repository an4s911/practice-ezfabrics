export default function HamBurgerIcon({ size, onClick }) {
    function IconLine({ height }) {
        const style = {
            height: `${height}px`,
        };
        return (
            <div
                style={{ ...style }}
                className={`rounded-md w-full h-full bg-black`}
            ></div>
        );
    }

    const height = size - 3;
    const lineHeight = height / 4.8;
    const styles = {
        width: `${size}px`,
        height: `${height}px`,
    };
    return (
        <div
            style={{
                ...styles,
            }}
            className="-mr-1 p-1 box-content cursor-pointer flex flex-col justify-between md:hidden outline-none"
            onClick={onClick}
        >
            <IconLine height={lineHeight} />
            <IconLine height={lineHeight} />
            <IconLine height={lineHeight} />
        </div>
    );
}

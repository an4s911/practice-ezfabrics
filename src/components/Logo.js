export default function Logo({ moreBold = false }) {
    return (
        <div className="flex gap-2.5 py-3 items-center">
            <img
                className="h-[30px] w-auto"
                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F7b4adc4aaf108a543954ad257b4b6ab9.cdn.bubble.io%2Ff1668506149500x377938704994438900%2Fhttps___s3.amazonaws.com_appforest_uf_f1655194816998x114895560315005470_2020-09-10%25252019.59.15.jpg?w=48&h=48&auto=compress&dpr=2&fit=max"
                alt="Logo"
            />
            <p
                className={`min-w-[98px] max-w-[98px] font-${
                    moreBold ? "bold" : "semibold"
                } leading-none text-sm whitespace-break-spaces`}
            >
                Ez Fabrics Template
            </p>
        </div>
    );
}

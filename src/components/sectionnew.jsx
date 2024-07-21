

const Section1 = ({
    classname,
    id,
    crosses,
    crossoffset,
    custompaddings,
    children
}) => {
    return (
        <div className={` relative ${custompaddings} || 'py-10
        lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ""} ${classname || ""}`}>{children}
        </div>
    )
}

export {Section1}
export default function SortComponent({ content, fields, selected, setSelected }) {
    //   const [categories] = content;
    //   const filter = Object.keys(categories);
    // console.log(filter);

    const categoryHandler = (event) => {
        console.log(event.target.value);
        setSelected(event.target.value);
    };
    return (
        <select
            id="Categories"
            onChange={categoryHandler}
            value={selected || fields[0]}
        >
            {fields.map((category, index) => (
                <option key={index} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
}
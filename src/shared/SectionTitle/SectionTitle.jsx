
const SectionTitle = ({titleHead,titleBody}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center">
            <h2 className="text-xl text-yellow-500">--- {titleHead} ---</h2>
            <h3 className="border-y-2  text-3xl py-4 my-6 uppercase">{titleBody}no</h3>
        </div>
    );
};

export default SectionTitle;
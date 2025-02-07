import PropTypes from "prop-types";
import { FaEye, FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const WorkCard = ({ work }) => {
    const { _id, image, heading, paragraph, tools, live, github } = work || {};

    return (
        <div className="flex flex-col border rounded-[16px] w-full dark:border-[#172635]">
            <img
                src={image}
                className="max-h-[200px] min-h-[200px] w-full object-cover rounded-t-[16px]"
            />
            <div className="flex flex-col p-[14px] flex-grow dark:bg-dark-lite bg-white">
                <h1 className="font-medium text-[#172635] text-start text-splice dark:text-white-lite">
                    {heading}
                </h1>
                <p className="text-xs text-[#172635]/60 text-start mt-[12px] dark:text-white-deep">
                    {paragraph.slice(0, 110)}...
                </p>
                <div className="flex gap-[6px] mt-[8px] flex-wrap">
                    {tools.map((tool, index) => (
                        <span key={index} className="language">{tool?.name}</span>
                    ))}
                </div>
                {/* Spacer pushes content above to the top */}
                <div className="flex-grow"></div>
                <div className="flex justify-between items-center mt-5 cursor-pointer dark:text-white-deep">
                    <a href={live} target="_blank" className="flex items-center gap-[6px]">
                        <FaLink />
                        <span className="text-[12px] underline">Live Preview</span>
                    </a>
                    <div className="flex items-center gap-[10px]">
                        <a href={github} target="_blank" className="flex items-center gap-[6px]">
                            <FaGithub />
                            <span className="text-[12px] underline">Github</span>
                        </a>

                        <Link to={`/project-details/${_id}`} className="flex items-center gap-[4px]">
                            <FaEye />
                            <span className="text-[12px] underline">Details</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

WorkCard.propTypes = {
    work: PropTypes.object,
}

export default WorkCard;
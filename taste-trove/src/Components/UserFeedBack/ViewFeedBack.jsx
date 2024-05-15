
import { FaStar } from "react-icons/fa";
const ViewFeedBack = ({userFb}) => {
    const {feedBack,userName}=userFb
    return (
        <>
            <div className="border-2 border-white px-10 py-10 flex-none w-64 h-40 rounded-lg shadow-md m-4">
                <p className="flex gap-x-1 mb-3">
                <FaStar className="text-red-200"/>
                <FaStar className="text-red-200"/>
                <FaStar className="text-red-200"/>
                <FaStar className="text-red-200"/>
                <FaStar className="text-red-200"/>
                </p>
                <h3 className="text-white mb-3">{feedBack}</h3>
                <p className="text-white">by- {userName}</p>
            </div>
        </>
    );
};

export default ViewFeedBack;
import PersonalInfoForm from "../../components/authDashboard/PersonalInfoForm";
import { personalInfo } from "../../constants/content/dashboardContent";

function Personal() {
    return (
        <div className=" xl:whiteCard h-fit flex flex-col xl:px-8 px-4 xl:pt-6 pt-14 pb-9 items-center w-full">
            <div className="w-full mb-4 xl:w-full">
                <img src={personalInfo.Profile} width={'116px'} height={'120px'} />
                <PersonalInfoForm />
            </div>
        </div>
    )
}
export default Personal;
import ResumeCV from "../components/ResumeCV"
import { resumeData } from '../resumeData'

export default function Resume() {
    return (
        <>
            <ResumeCV resumeData={resumeData} />
        </>
    )
}
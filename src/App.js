import ClassSectionHeading from "./classcomponents/ClassSectionHeading";
import ClassTeamMembarSection from "./classcomponents/ClassTeamMembarSection";
import SectionHeading from "./components/SectionHeading";
import TeamMembar from "./components/TeamMembar";
import SectionSeparator from "./components/SectionSeparator";

function App() {
	return (
		<>
			<SectionHeading heading={"Meet Our Beatiful Team"} />
			<SectionSeparator />
			<TeamMembar />
			<ClassSectionHeading heading={"Meet Our Beautiful Developer"} color={"orange"} />
			<SectionSeparator />
			<ClassTeamMembarSection />
		</>
	);
}

export default App;

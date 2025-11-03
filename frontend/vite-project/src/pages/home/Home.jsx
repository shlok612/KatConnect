import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<>
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 pb-6'>
			<Sidebar />
			<MessageContainer />
			
		</div>
		<div >
			<footer className="fixed bottom-0 left-0 w-full text-center py-2 text-sm bg-black/40 text-gray-300 backdrop-blur-md">
  Built by Shlok Katiyar 💻
	with Socket, Daisy, React, Node, Mongo and Tailwind
</footer>


		</div>
			

		</>
	);
};
export default Home;
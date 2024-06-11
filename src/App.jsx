import AvatarComponent from "./components/AvatarComponent";
import BtnPrimary, { ButtonSecondary } from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  const unreadMessages = [2, 4, 4, 3];
  function handleClick() {
    alert("Button clicked! ");
  }
  const students=[
    {
      username: "Saina",
      profile : "https://i.pinimg.com/564x/f2/fd/a2/f2fda265d0605d37973610ec76da706f.jpg"

  
    },
    {
      username: "Tey",
      profile : "https://i.pinimg.com/564x/f2/fd/a2/f2fda265d0605d37973610ec76da706f.jpg"

    },
    {
      username: "Sreynit",
      profile : "https://i.pinimg.com/564x/f2/fd/a2/f2fda265d0605d37973610ec76da706f.jpg"
    }
  ]
  return (
    <>
      {unreadMessages.length > 0 &&
      <h2>
          You have {unreadMessages.length} unread messages.
      </h2>
  }
      <BtnPrimary title="Login" onClick={handleClick}/>
      <BtnPrimary color="bg-green-600" title="Sign up" />
      <h1 className="text-4xl text-center font-bold">Top sleeping in class</h1>
      {
        students.map((students, index) => (
          <AvatarComponent
          key={index}
          username={students.username}
          image={students.profile}
          />
        ))
      }
      {/* { <AvatarComponent username="Sreytey " image="https://i.pinimg.com/564x/f2/fd/a2/f2fda265d0605d37973610ec76da706f.jpg"/> } */}
      
      
    </>
  );
}

export default App;

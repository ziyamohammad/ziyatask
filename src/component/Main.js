import React, { useState } from 'react'


export default function Main() {
      const[chats,setChats]=useState("");
         const[myname,setMyname]=useState([])
         const[users,setUsers]=useState([
          {id:1,nam:"Caressa Jessalin",chats:[]},
          {id:2,nam:"Letty Bride",chats:[]}
        ])
        const [isMobile, setIsMobile] = useState(window.innerWidth <=800);
         const handleChange=(e)=>{
           setChats(e.target.value)
         }
         const handleClick =() =>{
          if (!myname) return;

    const updatedUsers = users.map((user) => {
      if (user.id === myname.id) {
        return {
          ...user,
          chats: [...user.chats, { id: user.chats.length, chat: chats }],
        };
      }
      return user;
    });

    setUsers(updatedUsers);
    setMyname({
      ...myname,
      chats: [...myname.chats, { id: myname.chats.length, chat: chats }],
    });
    setChats('');
  };
         const Select=(allUser)=>{
          setMyname(allUser);

         }
         React.useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
          };
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        const goBack = () => {
          setMyname(null);
        };

        return (
          <div className="main">
           
            {!isMobile || !myname ? (
              <div className="info">
                <div className="details">
                  <p className="allchat">ALL YOUR CHATS</p>
                  <button className="chatimg">
                    <span className="img4"></span>Chat Images: ON
                  </button>
                  <p className="para">
                    When a bot sends you images, you will be charged one secondary image
                  </p>
                  <div className="peoples">
                    {users.map((items) => (
                      <span
                        className="peoplename"
                        key={items.id}
                        onClick={() => Select(items)}
                      >
                        <span className="imgp"></span>
                        {items.nam}
                      </span>
                    ))}
                  </div>
                  <span className="line2"></span>
                  <span className="network">
                    <button className="add">+</button>
                    <p className="new">Create new bot</p>
                  </span>
                </div>
              </div>
            ) : null}
      
          
            {myname && (
              <div className="chats">
                <div className="chatnav">
                  <span className="name">
                    <span className="imagegirl"></span>
                    <p className="candidate">{myname.nam}</p>
                  </span>
                  <span className="icon">
                    <span className="back" onClick={goBack}></span>
                    <p onClick={goBack}>Back</p>
                    <span className="garbage"></span>
                    <p>Delete</p>
                  </span>
                </div>
                <div className="showchats">
                  {myname?.chats?.length > 0 ? (
                    myname.chats.map((element) => (
                      <div className="child" key={element.id}>
                        {element.chat}
                      </div>
                    ))
                  ) : (
                    <p>No chats available. Start a conversation!</p>
                  )}
                </div>
                <span className="mainchat">
                  <input
                    type="text"
                    className="inputname"
                    value={chats}
                    placeholder="Message"
                    onChange={handleChange}
                  />
                  <button className="send" onClick={handleClick}></button>
                </span>
              </div>
            )}
          </div>
        );
      }


  
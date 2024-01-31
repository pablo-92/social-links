import styled from "styled-components";

export default function App() {
  let data = {
    name: "Jessica",
    lastname: "Randall",
    city: "London",
    bio: "Front-end developer and avid reader.",
    country: "United Kingdom",
    media: ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"],
  };

  const MediaButton = (obj) => {
    return obj.media.map((element, index) => (
      <button key={index}>{element}</button>
    ));
  };

  return (
    <StyledApp>
      <div id="card">
        <div className="pic-container">
          <img
            className="profile-picture"
            src="/images/avatar-jessica.jpeg"
            alt={`${data.name} picture`}
            title={`${data.name}`}
          />
        </div>

        <section id="profile-info">
          <h1 className="name">
            {data.name} {data.lastname}
          </h1>
          <p className="location">
            {data.city}, {data.country}
          </p>
        </section>

        <p className="bio">"{data.bio}"</p>

        <section id="profile-media">{MediaButton(data)}</section>
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--Off-Black);
  display: flex;
  align-items: center;
  justify-content: center;

  #card {
    max-width: 350px;
    height: fit-content;
    padding: 20px;
    background-color: var(--Dark-Grey);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .pic-container {
      width: 100px;
      height: 100px;
      position: relative;
      margin: 20px 0;

      .profile-picture {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    #profile-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;

      .name {
        color: var(--White);
        font-weight: 400;
        font-size: 27px;
      }

      .location {
        color: var(--Orange);
        font-weight: 600;
      }
    }

    .bio {
      font-weight: 400;
      color: var(--White);
      margin-bottom: 20px;
    }

    #profile-media {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      button {
        width: 100%;
        height: 50px;
        background-color: var(--Grey);
        color: var(--White);
        border-radius: 10px;
        border: none;
        font-weight: 700;
        font-size: 16px;
      }

      button:hover {
        cursor: pointer;
        background-color: var(--Orange);
        color: var(--Off-Black);
      }
    }
  }
`;

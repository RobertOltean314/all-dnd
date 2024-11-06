function App() {
  return (
    <section id="homepage">
      <h1 id="homepage__label">
        Welcome to All Dnd, Dungeon Master --Username--
      </h1>
      <div id="homepage__listOfCampaigns">
        <a href="pages/createNewCampaign.html">
          <article id="listOfCampaigns__createNewCampaign">
            <button id="createNewCampaign__button">Create new Campaign</button>
          </article>
        </a>
      </div>
    </section>
  );
}

export default App;

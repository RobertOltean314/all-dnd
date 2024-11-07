import { Link, useNavigate } from "react-router-dom";

function CreateNewCampaign() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dungeon-master-page");
  };

  return (
    <div id="createCampaign">
      <h1>Create New Campaign</h1>
      <form id="campaignForm" onSubmit={handleSubmit}>
        <label htmlFor="campaignName">Campaign Name:</label>
        <input type="text" id="campaignName" required />

        <label htmlFor="campaignGenres">Genres:</label>
        <input
          type="text"
          id="campaignGenres"
          required
          placeholder="e.g: Fantasy, Medieval, Adventure"
        />

        <button type="submit">Create Campaign</button>
        <Link to="/dungeon-master-page">
          <button type="button" className="back-button">
            Back to Home
          </button>
        </Link>
      </form>
    </div>
  );
}

export default CreateNewCampaign;

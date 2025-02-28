import sc from 'styled-components';

const StyledThankYouPage = sc.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme?.color?.background || '#f0f0f0'};
  color: ${({ theme }) => theme?.color?.primary || '#333'};
  padding: 20px;

  .thank-you-message {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .description {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .home-button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: ${({ theme }) => theme?.color?.primary || '#333'};
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme?.color?.primaryLight || '#555'};
    }
  }
`;

const ThankYouPage = () => {
  return (
    <StyledThankYouPage>
      <div className="thank-you-message">Thank You!</div>
      <div className="description">Your submission has been received.</div>
    </StyledThankYouPage>
  );
};

export default ThankYouPage;

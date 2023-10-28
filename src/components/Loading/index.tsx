import loadingSrc from 'assets/images/loading.gif';

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingSrc} alt="loading" />
    </div>
  );
};

export default Loading;

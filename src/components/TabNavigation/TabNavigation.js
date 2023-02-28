import './TabNavigation.css'
const TabNavigation = ({ tabs, renderTab }) => {
  return (
    <>
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            className="button"
            onClick={() => {
              renderTab(tab);
            }}
          >
          {tab}
          </button>
        );
      })}
    </>
  );
};

export default TabNavigation;

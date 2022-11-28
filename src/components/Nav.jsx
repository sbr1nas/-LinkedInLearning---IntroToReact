export default ({ cast, onChoice }) => {
  return (
    <nav className="container">
      <ul>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="link">
              cast
            </summary>
            <ul role="listbox">
              {cast.map((member) => (
                <li key={member.id}>
                  <a
                    onClick={() => {
                      onChoice(member);
                    }}
                    data-tooltip={member.name}
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <img
                  src="images/logo_bug_stargazers.svg"
                  alt="Stargazers Logo"
                />
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
};

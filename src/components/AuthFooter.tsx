function Footer() {
  return (
    <div
      className="footer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'center',
        color: '#000000',
      }}
    >
      <ul
        style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        <li>Baptiste</li>
        <li>Jérôme</li>
        <li>Yoann</li>
        <li>Laurent</li>
        <li>Yoan</li>
      </ul>
      <p
        style={{
          fontSize: '0.8em',
          color: '#000000',
          textAlign: 'center',
          verticalAlign: 'bottom',
          marginTop: '20px',
        }}
      >
        © 2024. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

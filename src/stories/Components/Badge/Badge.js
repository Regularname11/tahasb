import React from 'react';

const Badge = (props) => {
  const { text, color } = props;
<div>
      <Badge Badge="Mysterious">
      Mysterious
      </Badge>
</div>

  const badgeStyle = {
    backgroundColor: color,
    color: 'white',
    display: 'inline-block',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  return <div style={badgeStyle}>{text}</div>;
};

export default Badge;
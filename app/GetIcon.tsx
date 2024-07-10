import React from 'react';
import * as Hi2Icons from 'react-icons/hi2';

interface GetIconProps {
  name?: keyof typeof Hi2Icons;
  size?: number;
  className?: string;
}

const GetIcon= ({ name = 'HiOutlineQuestionMarkCircle', size = 24, className = 'mr-2' }: GetIconProps) => {
  const IconComponent = Hi2Icons[name];
  
  if (!IconComponent) {
    return null; // Return null if the icon name is not found
  }
  
  return <IconComponent size={size} className={className} />;
};

export default GetIcon;

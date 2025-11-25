import React from 'react';
import Image from 'next/image'; 

const ServiceCard = ({
  title,
  description,
  icon,          
  iconWidth = 48,
  iconHeight = 48,
  iconAlt = '',
  className = '', 
}) => {
  return (
    <div className={`bg-[#F6F6F6] p-3 rounded-md flex flex-col gap-5 ${className}`}>
      <div className="flex gap-5 items-center">
        {typeof icon === 'string' ? (
          <img src={icon} alt={iconAlt} width={iconWidth} height={iconHeight} />
        ) : icon.type?.displayName === 'Image' || icon.type?.name === 'Image' ? (
          <Image src={icon} alt={iconAlt} width={iconWidth} height={iconHeight} />
        ) : (
          React.cloneElement(icon, { width: iconWidth, height: iconHeight })
        )}
        <p className="text-2xl font-bold">{title}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
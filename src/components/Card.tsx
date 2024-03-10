const Card = ({
  link,
  title,
  description,
}: {
  link: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="pt-2 pb-2">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group block max-w-xs rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#414b5f] hover:ring-[#414b5f]"
      >
        <div className="flex justify-end space-x-3">
          <h3 className="text-slate-900 group-hover:text-white text-sm text-right font-BebasNeue">
            {title}
          </h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm text-right font-Oswald">
          {description}
        </p>
      </a>
    </div>
  );
};

export default Card;

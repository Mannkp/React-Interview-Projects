import MenuItem from "./MenuItem";

const NavMenu = ({ data, open }) => {
  return (
    <>
      {
        open && <ul className="nav">
          {data && data?.length > 0 && data?.map((item, index) => (
            <li key={index}>
              <MenuItem data={item} />
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default NavMenu;

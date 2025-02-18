import React , { useRef, useEffect , useState} from 'react';

const Nav = () => {

    const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const spanElement = document.createElement('span');
      spanElement.className = 'menu-trigger';
      spanElement.innerHTML = '<i class="fal fa-angle-down"></i>';
      containerRef.current.appendChild(spanElement);
    }
  }, []);

  const [menuItems, setMenuItems] = useState([
    { label: "Home", link: "/" },
    {
      label: "About",
      link: "/about",
      submenu: [
        { label: "About Us", link: "/about" },
        { label: "Affiliation", link: "/affiliation" },
        { label: "Infrastructure", link: "/schoolinfra" },
        { label: "Admission", link: "/admission" },
        { label: "Principal's Message", link: "/principal" },
        { label: "Mandatory Disclosure", link: "/man-dis" },
      ],
    },
    {
      label: "Administration",
      link: "#",
      submenu: [
        { label: "Staff Details", link: "/instructors" },
        { label: "School Committee", link: "/committee" },
        { label: "Student Enroll", link: "/enrollment" },
        { label: "Fee and Scholarship", link: "/fee" },
        { label: "Teachers Training", link: "/training" },
        { label: "TC Sample", link: "/tc" },
      ],
    },
    {
      label: "Academics",
      link: "#",
      submenu: [
        { label: "School Curiculum", link: "/schoolcurriculum" },
        { label: "List of Books", link: "/blog" },
        { label: "School at Glance", link: "/schoolinfra" },
        { label: "Holidays List", link: "/holidays" },
        { label: "CBSE Result", link: "/result" },
      ],
    },
    {
      label: "More",
      link: "#",
      submenu: [
        { label: "Co Curricular Activities", link: "/curricular" },
        { label: "School Activites", link: "/school" },
        { label: "Achievements", link: "/Achievements" },
        { label: "Olympiad", link: "/olympiad" },
        { label: "Community Services", link: "/community" },
        { label: "Sports", link: "/sports" },
        { label: "CBSE Activities", link: "/cbse" },
      ],
    },
    { label: "Gallery", link: "/gallery" },
    { label: "Notice", link: "/notice" },
    { label: "Contact Us", link: "/contact" },
  ]);
  useEffect(() => {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((item) =>
        item.submenu && item.submenu.length > 0
          ? { ...item, hasSubmenu: true }
          : item
      )
    );
  }, []);

const handleSubmenuToggle = (index) => {
    setMenuItems((prevMenuItems) => {
      const newMenuItems = [...prevMenuItems];
      newMenuItems[index].submenuOpen = !newMenuItems[index].submenuOpen;
      return newMenuItems;
    });
  };

    return (
        
        <ul className="primary-menu">
            {menuItems.map((item, index) => (
          <li key={index}>

            <a href={item.link}>
              {item.label}
            </a>

            {item.submenu && (
              <span
                className={`menu-trigger ${item.submenuOpen ? 'open' : ' '}`}
                onClick={() => handleSubmenuToggle(index)}
              >
            
                <i 
                className={`submenu-icon ${item.submenuOpen ? 'fal fa-angle-up' : 'fal fa-angle-down'}`}>
              </i>
              </span>
            )}
            {item.submenu && (
              <ul className={`submenu ${item.submenuOpen ? 'open' : ''}`}
              
              >
                {item.submenu.map((subitem, subindex) => (
                   <li key={subindex} >
                    <a href={subitem.link}>{subitem.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

    </ul>

    )
}
export default Nav;

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
        { label: "Infrastructure", link: "/course-3" },
        { label: "Admission", link: "/course-4" },
        { label: "Principal's Message", link: "/course-list" },
        { label: "Mandatory Disclosure", link: "/man-dis" },
      ],
    },
    {
      label: "Administration",
      link: "#",
      submenu: [
        { label: "Staff Details", link: "/course-1" },
        { label: "School Committee", link: "/course-2" },
        { label: "Student Enroll", link: "/course-3" },
        { label: "Fee and Scholarship", link: "/course-4" },
        { label: "Teachers Training", link: "/course-list" },
        { label: "TC Sample", link: "/course-details/1" },
      ],
    },
    {
      label: "Academics",
      link: "#",
      submenu: [
        { label: "School Curiculum", link: "/course-1" },
        { label: "List of Books", link: "/course-2" },
        { label: "School at Glance", link: "/course-3" },
        { label: "Holidays List", link: "/course-4" },
        { label: "CBSE Result", link: "/course-list" },
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

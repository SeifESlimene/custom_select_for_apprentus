import './App.css';
import {
  useState,
  useEffect,
  //  useRef
} from 'react';

function App() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [options, setOptions] = useState([]);
  const [activeItem, setActiveItem] = useState(0);
  const [selectedItem, setSelectedItem] = useState('Sort By');
  // const dropdownButtonRef = useRef();
  // const selectedItemRef = useRef();
  // const caretDownRef = useRef();
  // const caretDownIconRef = useRef();

  const isOptionsExist = options.length !== 0;

  const handleClickDropdownButton = (e) => {
    e.stopPropagation();
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleClickDropdownItem = (event, itemPosition, itemName) => {
    setActiveItem(itemPosition);
    setSelectedItem(itemName);
    setIsOpenDropdown(!isOpenDropdown);
  };

  useEffect(() => {
    const options = [
      'Best Selling',
      'New Arrivals',
      'Customer Rating',
      'Price Low to High',
      'Price High to Low',
    ];
    setOptions(options);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      // const handleClickOutside = (e) => {
      // console.log({ 'e.target': e.target });
      // console.log(
      //   e.target !== dropdownButtonRef.current,
      //   e.target !== selectedItemRef.current,
      //   e.target !== caretDownRef.current,
      //   e.target !== caretDownIconRef.current
      // );
      // if (
      //   e.target !== dropdownButtonRef.current &&
      //   e.target !== caretDownRef.current &&
      //   e.target !== selectedItemRef.current &&
      //   e.target !== caretDownIconRef.current
      // ) {
      // console.log({ isOpenDropdown: isOpenDropdown });
      if (isOpenDropdown) {
        // console.log('Outside Click');
        setIsOpenDropdown(false);
      }
      //   }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [isOpenDropdown]);

  return (
    <>
      <div className='dropdown-wrapper'>
        <div
          // ref={dropdownButtonRef}
          className='dropdown-btn'
          onClick={handleClickDropdownButton}
        >
          <span
            // ref={selectedItemRef}
            id='selected-item'
          >
            {selectedItem}
          </span>
          <span
          // ref={caretDownRef}
          >
            <i
              //  ref={caretDownIconRef}
              className='fa-solid fa-caret-down'
            ></i>
          </span>
        </div>

        <div
          className={isOpenDropdown ? 'dropdown-menu open' : 'dropdown-menu'}
        >
          {isOptionsExist &&
            options.map((option, index) => (
              <div
                key={`item${index}`}
                className={index === activeItem ? 'item active' : 'item'}
                onClick={(event) =>
                  handleClickDropdownItem(event, index, option)
                }
              >
                {option}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;

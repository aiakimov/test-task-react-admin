import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import DropdownArrowIcon from '../icons/dropdownArrowIcon'
import Input from './input'

const Dropdown = ({
  label,
  name,
  placeholder,
  iconLabel,
  itemList,
  setActiveItem,
}: {
  label: string
  name: string
  placeholder: string
  setActiveItem: (arg: string) => void
  itemList: { name: string; id: string }[]
  iconLabel?: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  const containterRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (!value.length && !isOpen) setActiveItem('')
  }, [value])

  useEffect(() => {
    const handelClickOutside = (e: MouseEvent) => {
      const closest = (e.target as HTMLElement).closest('[data-dropdown-base]')
      if (!closest || closest !== containterRef.current) setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('click', handelClickOutside)
    } else {
      document.removeEventListener('click', handelClickOutside)
    }

    return () => {
      document.removeEventListener('click', handelClickOutside)
    }
  }, [isOpen])

  const filteredList = useMemo(
    () =>
      itemList.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      ),
    [value]
  )

  const handleChoose = (id: string, name: string) => {
    setValue(name)
    setActiveItem(id)
    setIsOpen(false)
  }

  return (
    <div
      className="relative"
      data-dropdown-base
      ref={containterRef}
    >
      <div>
        <Input
          onClick={() => setIsOpen(true)}
          className="px-2 py-2 text-14-24"
          label={label}
          name={name}
          placeholder={placeholder}
          iconLabel={iconLabel}
          setValue={setValue}
          value={value}
          type="text"
          children={
            <div
              className={`${
                isOpen && ' rotate-180'
              } transition-all duration-300 absolute right-dropdownArrow top-dropdownArrow text-textGray`}
            >
              <DropdownArrowIcon />
            </div>
          }
        />
      </div>
      <div
        className={`border-gray rounded-lg  bg-white will-change-[height] transition-all duration-300 overflow-hidden absolute left-0 top-100-p mt-1 ${
          isOpen ? 'max-h-96 border p-2' : 'max-h-0'
        } h-42 bg-white z-50`}
      >
        <div
          className={`h-38 pb-1  
           scrollbar overflow-y-scroll `}
        >
          {!!filteredList.length &&
            filteredList.map((item) => {
              return (
                <div
                  onClick={() =>
                    handleChoose(
                      item.id,
                      item.name.charAt(0).toUpperCase() + item.name.slice(1)
                    )
                  }
                  className="cursor-pointer hover:text-main truncate  w-50 "
                  key={item.id}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </div>
              )
            })}
          {!filteredList.length && (
            <div className="w-50 flex justify-center">No results...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dropdown

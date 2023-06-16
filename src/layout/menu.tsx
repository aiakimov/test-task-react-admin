import { Menu, useStore } from 'react-admin'
import { useEffect, useMemo, useState } from 'react'
import Input from '../components/input'
import JobIcon from '../icons/jobIcon'
import Dropdown from '../components/dropdown'
import LocationIcon from '../icons/locationIcon'
import IndustryIcon from '../icons/industryIcon'
import Logo from '../components/logo'
import Line from '../components/line'
import axios from 'axios'

export const MyMenu = () => {
  const [job, setJob] = useStore('job', '')
  const [locations, setLocations] = useStore('locations', [])
  const [industries, setIndustries] = useStore('industries', [])
  const [activeIndustry, setActiveIndustry] = useStore('activeIndustry', '')
  const [activeLocation, setActiveLocation] = useStore('activeLocation', '')

  const filtersCount = useMemo(() => {
    console.log(job.length, activeIndustry.length, activeLocation.length)
    let count = 0
    if (job.length) count + 1
    if (activeLocation.length) count + 1
    activeIndustry.length && count + 1

    return count
  }, [job, activeLocation, activeIndustry])

  console.log(filtersCount)
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) return

    axios
      .get('http://3.65.149.62/test-api/contacts/countries', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((responce) => setLocations(responce.data))
    axios
      .get('http://3.65.149.62/test-api/contacts/industries', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((responce) => setIndustries(responce.data))
  }, [])

  return (
    <div className="w-63 border-l-0 border border-gray border-y-0">
      <div className="p-4">
        <Logo />
        <h2 className="mt-[50px] text-text text-18-24 font-semibold">
          Filters
        </h2>
      </div>
      <div className="border-y-gray py-4 border-x-0 border p-4 flex flex-col gap-4">
        <Input
          className="px-2 py-2 text-14-24"
          name="job"
          label="Job title"
          placeholder="Search by job title"
          setValue={setJob}
          value={job}
          type="text"
          iconLabel={<JobIcon />}
        />
        <Line />
        <Dropdown
          setActiveItem={setActiveLocation}
          itemList={locations}
          label="Location"
          name="location"
          placeholder="Choose location"
          iconLabel={<LocationIcon />}
        />
        <Line />
        <Dropdown
          setActiveItem={setActiveIndustry}
          itemList={industries}
          label="Industry"
          name="industry"
          placeholder="Choose industry"
          iconLabel={<IndustryIcon />}
        />
      </div>
    </div>
  )
}

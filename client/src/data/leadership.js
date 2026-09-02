import mateo from '../assets/officers/mateo.JPG'
import guillermo from '../assets/officers/Guillermo.jpg'
import jimena from '../assets/officers/Jimena.jpg'
import ceci from '../assets/officers/Ceci.jpg'
import luis from '../assets/officers/luis.jpg'
import mohammed from '../assets/officers/Mohammed.jpg'
import sally from '../assets/officers/Sally.jpg'
import vanessa from '../assets/officers/Vanessa.jpg'
import hugo from '../assets/officers/Huego.jpg'
import roberto from '../assets/officers/Roberto.jpg'
import alejandro from '../assets/officers/Alejandro.jpg'
import judith from '../assets/officers/judith.jpg'
import jovani from '../assets/officers/Jovani.jpg'
import salome from '../assets/officers/Salome.jpg'
import alonso from '../assets/officers/Alonso2.jpg'
import aracely from '../assets/officers/aracely.jpg'
import jennifer from '../assets/officers/Jennifer.jpg'
import jacob from '../assets/officers/Jacob.jpg'
import humberto from '../assets/officers/Humberto.jpg'
import david from '../assets/officers/David.png'
import kloey from '../assets/officers/Khloey.jpg'
import ingrid from '../assets/officers/ingrid.jpg'
import valeria from '../assets/officers/Valeria.png'
import emilio from '../assets/officers/emilioburgos.png'
import matthewAlonso from '../assets/officers/MatthewAlonso.jpg'
import renataRevelo from '../assets/officers/RenataRevelo.jpg'
import liliVelazquez from '../assets/officers/LiliVelazquez.png'
import julisesMercado from '../assets/officers/JulisesMercado.jpg'
import jesusGarcia from '../assets/officers/JesusGarcia.png'
import isabelaClaudio from '../assets/officers/IsabelaClaudio.jpg'
import estebanGarciaTaquez from '../assets/officers/EstebanGarciaTaquez.jpg'
import andresPopoca from '../assets/officers/AndresPopoca.jpg'
import arielGarcia from '../assets/officers/ArielGarcia.jpg'
import diegoPerezAguilar from '../assets/officers/DiegoPerezAguilar.png'
import emilioCalvo from '../assets/officers/EmilioCalvo.jpg'
import giselleLechuga from '../assets/officers/GiselleLechuga.jpg'
import joselynDeLeora from '../assets/officers/JoselynDeLeora.jpg'

/**
 * Shared group photo used as the hero background across all Leadership pages.
 */
export { default as leadershipGroupPhoto } from '../assets/officers/group photo.jpeg'

/**
 * What each role actually does — shown in the "?" popover on officer cards.
 * Left empty for now (on request) — the "?" button only appears once a role
 * has text here, so fill these in whenever real copy is ready.
 */
export const ROLE_DESCRIPTIONS = {
  President: '',
  'External Vice President': '',
  'Internal Vice President': '',
  Treasurer: '',
  Secretary: '',
  'Executive Advisor': '',
  'Faculty Advisor': '',
  'Public Relations': '',
  'Outreach Co-Chair': '',
  'SHPE Jr Co-Chair': '',
  'Communications Co-Chair': '',
  Webmaster: '',
  Historian: '',
  Activities: '',
  MemberSHPE: '',
  SHPEtinas: '',
  LeaderSHPE: '',
  'Fundraising Chair': '',
  'MentorSHPE Co-Chair': '',
  Academics: '',
  'Graduate Ambassador': '',
  'Technical Co-Chair': '',
  Developer: '',
}

function withDescription(member) {
  return { ...member, description: ROLE_DESCRIPTIONS[member.role] || '' }
}

/**
 * President stands alone at the top of the chart — not tied to one pillar.
 */
export const PRESIDENT = withDescription({
  role: 'President',
  name: 'Mateo Ortiz',
  email: 'president.shpe.uic@gmail.com',
  linkedin: '',
  photo: mateo,
})

/**
 * Every other Executive Board seat leads one pillar, shown together with
 * that pillar's General Board team, matching the corrected org chart:
 *  - Historian sits under Internal Communications (not Secretary)
 * (SHPEtinas is its own Executive Board seat — see EXECUTIVE_BOARD below —
 * not a Community Team member.)
 */
export const BOARD_PILLARS = [
  {
    pillar: 'External Vice President',
    team: 'External Communications Team',
    leaders: [
      { role: 'External Vice President', name: 'Guillermo Ramirez III', email: 'externalvp.shpe.uic@gmail.com', linkedin: '', photo: guillermo },
    ].map(withDescription),
    members: [
      { role: 'Public Relations', name: 'Roberto Lozano', email: 'pr.shpe.uic@gmail.com', linkedin: '', photo: roberto },
      { role: 'Outreach Co-Chair', name: 'Jovani Sanchez Olvera', email: 'outreach.shpe.uic@gmail.com', linkedin: '', photo: jovani },
      { role: 'Outreach Co-Chair', name: 'Valeria C.', email: '', linkedin: '', photo: valeria },
      { role: 'SHPE Jr Co-Chair', name: 'Salome Diaz Rojas', email: 'shpejr.uic@gmail.com', linkedin: '', photo: salome },
      { role: 'SHPE Jr Co-Chair', name: 'Julises Mercado', email: '', linkedin: '', photo: julisesMercado },
    ].map(withDescription),
  },
  {
    pillar: 'Internal Vice President',
    team: 'Internal Communications Team',
    leaders: [
      { role: 'Internal Vice President', name: 'Jimena Soto', email: 'internalvp.shpe.uic@gmail.com', linkedin: '', photo: jimena },
    ].map(withDescription),
    members: [
      { role: 'Communications Co-Chair', name: 'Vanessa Del Real', email: 'communications.shpe.uic@gmail.com', linkedin: '', photo: vanessa },
      { role: 'Communications Co-Chair', name: 'Jesus Garcia', email: '', linkedin: '', photo: jesusGarcia },
      { role: 'Webmaster', name: 'Alejandro Zavala', email: 'communications.shpe.uic@gmail.com', linkedin: '', photo: alejandro },
      { role: 'Historian', name: 'Hugo Garcia', email: 'historian.shpe.uic@gmail.com', linkedin: '', photo: hugo },
    ].map(withDescription),
  },
  {
    pillar: 'Secretary',
    team: 'Community Team',
    leaders: [
      { role: 'Secretary', name: 'Luis Gonzalez', email: 'secretary.shpe.uic@gmail.com', linkedin: '', photo: luis },
      { role: 'SHPEtinas', name: 'Ingrid Villagomez', email: 'shpetinas.shpe.uic@gmail.com', linkedin: '', photo: ingrid },
    ].map(withDescription),
    members: [
      { role: 'Activities', name: 'Judith Benitez', email: 'activities.shpe.uic@gmail.com', linkedin: '', photo: judith },
      { role: 'MemberSHPE', name: 'Jennifer Chavez', email: 'membershpe.shpe.uic@gmail.com', linkedin: '', photo: jennifer },
    ].map(withDescription),
  },
  {
    pillar: 'Treasurer',
    team: 'Development Team',
    leaders: [
      { role: 'Treasurer', name: 'Cecilia Garcia', email: 'treasurer.shpe.uic@gmail.com', linkedin: '', photo: ceci },
    ].map(withDescription),
    members: [
      { role: 'LeaderSHPE', name: 'Jacob Porras', email: 'leadershpe.shpe.uic@gmail.com', linkedin: '', photo: jacob },
      { role: 'Fundraising Chair', name: 'Humberto Ortiz', email: 'fundraising.shpe.uic@gmail.com', linkedin: '', photo: humberto },
      { role: 'Technical Co-Chair', name: 'David Nyugen', email: 'technicalteam.shpe.uic@gmail.com', linkedin: '', photo: david },
      { role: 'Technical Co-Chair', name: 'Emilio Burgos', email: '', linkedin: '', photo: emilio },
    ].map(withDescription),
  },
  {
    pillar: 'Executive Advisor',
    team: 'Academics Team',
    leaders: [
      { role: 'Executive Advisor', name: 'Mohammed Sajjad', email: 'sradvisor.shpe.uic@gmail.com', linkedin: '', photo: mohammed },
      { role: 'Executive Advisor', name: 'Sally Roman', email: 'sradvisor.shpe.uic@gmail.com', linkedin: '', photo: sally },
    ].map(withDescription),
    members: [
      { role: 'MentorSHPE Co-Chair', name: 'Alonso Guadarrama', email: 'mentorshpe.shpe.uic@gmail.com', linkedin: '', photo: alonso },
      { role: 'MentorSHPE Co-Chair', name: 'Isabela Claudio', email: '', linkedin: '', photo: isabelaClaudio },
      { role: 'Academics', name: 'Aracely Atempa', email: 'academics.shpe.uic@gmail.com', linkedin: '', photo: aracely },
      { role: 'Graduate Ambassador', name: 'Kloey Acevedo Bernal', email: 'grad.shpe.uic@gmail.com', linkedin: '', photo: kloey },
    ].map(withDescription),
  },
]

/**
 * Executive Board, flattened: President + every pillar lead, in order.
 * (Faculty Advisors are shown separately, below, on the same page.)
 */
export const EXECUTIVE_BOARD = [
  PRESIDENT,
  ...BOARD_PILLARS.flatMap((pillar) => pillar.leaders),
]

/**
 * Faculty Advisors — not pillar leads, shown as their own distinct group.
 */
export const FACULTY_ADVISORS = [
  { role: 'Faculty Advisor', name: 'Dr. Matthew Alonso', email: '', linkedin: '', photo: matthewAlonso },
  { role: 'Faculty Advisor', name: 'Dr. Renata Revelo', email: '', linkedin: '', photo: renataRevelo },
  { role: 'Faculty Advisor', name: 'Lili Velazquez', email: '', linkedin: '', photo: liliVelazquez },
].map(withDescription)

/**
 * Technical Teams — three sub-teams, each with its own leads.
 * Rank-and-file member rosters are still TBD.
 */
export const TECHNICAL_TEAMS = [
  {
    key: 'website',
    label: 'Website Team',
    leads: [
      { role: 'Internal Vice President', name: 'Jimena Soto', email: 'internalvp.shpe.uic@gmail.com', linkedin: '', photo: jimena },
      { role: 'Webmaster', name: 'Alejandro Zavala', email: 'communications.shpe.uic@gmail.com', linkedin: '', photo: alejandro },
    ].map(withDescription),
    members: [],
    membersNote: '',
    pastContributors: [],
  },
  {
    key: 'app',
    label: 'App Team',
    leads: [
      { role: 'External Vice President', name: 'Guillermo Ramirez III', email: 'externalvp.shpe.uic@gmail.com', linkedin: '', photo: guillermo },
      { role: 'Webmaster', name: 'Alejandro Zavala', email: 'communications.shpe.uic@gmail.com', linkedin: '', photo: alejandro },
    ].map(withDescription),
    members: [
      { role: 'Developer', name: 'Esteban Garcia Taquez', email: '', linkedin: '', photo: estebanGarciaTaquez },
      { role: 'Developer', name: 'Andres Popoca', email: '', linkedin: '', photo: andresPopoca },
      { role: 'Developer', name: 'Emilio Calvo', email: '', linkedin: '', photo: emilioCalvo },
    ].map(withDescription),
    membersNote: '',
    // Joined from Northwestern SHPE with a few others to gain experience
    // before starting an app of their own back at Northwestern.
    pastContributors: [
      { role: 'Northwestern University', roleColor: '#4E2A84', name: 'Ariel Garcia', email: '', linkedin: '', photo: arielGarcia },
      { role: 'Northwestern University', roleColor: '#4E2A84', name: 'Diego Perez Aguilar', email: '', linkedin: '', photo: diegoPerezAguilar },
      { role: 'Past Lead', name: 'Giselle Lechuga', email: '', linkedin: '', photo: giselleLechuga },
      { role: 'Developer', name: 'Joselyn De Leora', email: '', linkedin: '', photo: joselynDeLeora },
    ].map(withDescription),
  },
  {
    key: 'technical',
    label: 'Technical Team',
    leads: [
      { role: 'Technical Co-Chair', name: 'David Nyugen', email: 'technicalteam.shpe.uic@gmail.com', linkedin: '', photo: david },
      { role: 'Technical Co-Chair', name: 'Emilio Burgos', email: '', linkedin: '', photo: emilio },
    ].map(withDescription),
    members: [],
    membersNote: '',
    pastContributors: [],
  },
]

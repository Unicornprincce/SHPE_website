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
 * What each role actually does, shown in the "?" popover on officer cards.
 * Left empty for now (on request). The "?" button only appears once a role
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
 * President stands alone at the top of the chart, not tied to one pillar.
 */
export const PRESIDENT = withDescription({
  role: 'President',
  name: 'Mateo Ortiz',
  email: 'president.shpe.uic@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mt-ortiz/',
  photo: mateo,
})

/**
 * Every other Executive Board seat leads one pillar, shown together with
 * that pillar's General Board team, matching the org chart.
 */
export const BOARD_PILLARS = [
  {
    pillar: 'External Vice President',
    team: 'External Communications Team',
    leaders: [
      { role: 'External Vice President', name: 'Guillermo Ramirez III', email: 'externalvp.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/gizmo3/', photo: guillermo },
    ].map(withDescription),
    members: [
      { role: 'Public Relations', name: 'Roberto Lozano', email: 'pr.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/roberto-t-lozano/', photo: roberto },
      { role: 'Outreach Co-Chair', name: 'Jovani Sanchez Olvera', email: 'outreach.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/jovani-sanchez-olvera-713665290/', photo: jovani },
      { role: 'Outreach Co-Chair', name: 'Valeria Cordova', email: 'outreach.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/vcordova08459/', photo: valeria },
      { role: 'SHPE Jr Co-Chair', name: 'Salome Diaz Rojas', email: 'shpejr.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/salome-diaz-rojas-09b0b01a9/', photo: salome },
      { role: 'SHPE Jr Co-Chair', name: 'Julises Mercado', email: 'shpejr.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/julises-mercado-09b0b01a9/', photo: julisesMercado },
    ].map(withDescription),
  },
  {
    pillar: 'Internal Vice President',
    team: 'Internal Communications Team',
    leaders: [
      { role: 'Internal Vice President', name: 'Jimena Soto', email: 'internalvp.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/soto-jimena/', photo: jimena },
    ].map(withDescription),
    members: [
      { role: 'Communications Co-Chair', name: 'Vanessa Del Real', email: 'communications.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/vanessa-del-real/', photo: vanessa },
      { role: 'Communications Co-Chair', name: 'Jesus Garcia', email: '', linkedin: 'https://www.linkedin.com/in/jesus-garcia-09b0b01a9/', photo: jesusGarcia },
      { role: 'Webmaster', name: 'Alejandro Zavala', email: 'communications.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/alejandro-zavala-253b43387/', photo: alejandro },
      { role: 'Historian', name: 'Hugo Garcia', email: 'historian.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/hugo-garcia-a04b93355/', photo: hugo },
    ].map(withDescription),
  },
  {
    pillar: 'Secretary',
    team: 'Community Team',
    leaders: [
      { role: 'Secretary', name: 'Luis Gonzalez', email: 'secretary.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/luis-gonzalez405/', photo: luis },
      { role: 'SHPEtinas', name: 'Ingrid Villagomez', email: 'shpetinas.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/ivillag/', photo: ingrid },
    ].map(withDescription),
    members: [
      { role: 'Activities', name: 'Judith Benitez', email: 'activities.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/judith-benitez-86474323b/', photo: judith },
      { role: 'MemberSHPE', name: 'Jennifer Chavez', email: 'membershpe.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/jenniferchavezramos525/', photo: jennifer },
    ].map(withDescription),
  },
  {
    pillar: 'Treasurer',
    team: 'Development Team',
    leaders: [
      { role: 'Treasurer', name: 'Cecilia Garcia', email: 'treasurer.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/ceciliaamygarcia/', photo: ceci },
    ].map(withDescription),
    members: [
      { role: 'LeaderSHPE', name: 'Jacob Porras', email: 'leadershpe.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/jacob-porras/', photo: jacob },
      { role: 'Fundraising Chair', name: 'Humberto Ortiz', email: 'fundraising.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/hùmberto-ortiz/', photo: humberto },
      { role: 'Technical Co-Chair', name: 'David Nyugen', email: 'technicalteam.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/davidnguyen50/', photo: david },
      { role: 'Technical Co-Chair', name: 'Emilio Burgos', email: 'technicalteam.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/emilio-burgos1/', photo: emilio },
    ].map(withDescription),
  },
  {
    pillar: 'Executive Advisor',
    team: 'Academics Team',
    leaders: [
      { role: 'Executive Advisor', name: 'Mohammed Sajjad', email: 'sradvisor.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/m-sajjad/', photo: mohammed },
      { role: 'Executive Advisor', name: 'Sally Roman', email: 'sradvisor.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/sally-roman/', photo: sally },
    ].map(withDescription),
    members: [
      { role: 'MentorSHPE Co-Chair', name: 'Alonso Guadarrama', email: 'mentorshpe.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/alonso-guadarrama-xx/', photo: alonso },
      { role: 'MentorSHPE Co-Chair', name: 'Isabella Claudio', email: 'mentorshpe.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/isabella-claudio/', photo: isabelaClaudio },
      { role: 'Academics', name: 'Aracely Atempa', email: 'academics.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/aracelyatempa/', photo: aracely },
      { role: 'Graduate Ambassador', name: 'Kloey Acevedo Bernal', email: 'grad.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/kloey-acevedo-bernal/', photo: kloey },
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
 * Faculty Advisors, not pillar leads, shown as their own distinct group.
 */
export const FACULTY_ADVISORS = [
  { role: 'Faculty Advisor', name: 'Dr. Matthew Alonso', email: 'malonso2@uic.edu', linkedin: 'https://www.linkedin.com/in/matthewalonso/', photo: matthewAlonso },
  { role: 'Faculty Advisor', name: 'Dr. Renata Revelo', email: '', linkedin: 'https://www.linkedin.com/in/renata-revelo-ph-d-90413a94/', photo: renataRevelo },
  { role: 'Faculty Advisor', name: 'Lili Velazquez', email: 'evelaz54@gmail.com', linkedin: 'https://www.linkedin.com/in/lili-velazquez-2697abb4/', photo: liliVelazquez },
].map(withDescription)

/**
 * Technical Teams, three sub-teams, each with its own leads.
 * Rank-and-file member rosters are still TBD.
 */
export const TECHNICAL_TEAMS = [
  {
    key: 'website',
    label: 'Website Team',
    leads: [
      { role: 'Internal Vice President', name: 'Jimena Soto', email: 'internalvp.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/soto-jimena/', photo: jimena },
      { role: 'Webmaster', name: 'Alejandro Zavala', email: 'communications.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/alejandro-zavala-253b43387/', photo: alejandro },
    ].map(withDescription),
    members: [],
    membersNote: '',
    pastContributors: [],
  },
  {
    key: 'app',
    label: 'App Team',
    leads: [
      { role: 'External Vice President', name: 'Guillermo Ramirez III', email: 'externalvp.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/gizmo3/', photo: guillermo },
      { role: 'Webmaster', name: 'Alejandro Zavala', email: 'communications.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/alejandro-zavala-253b43387/', photo: alejandro },
    ].map(withDescription),
    members: [
      { role: 'Developer', name: 'Esteban Garcia Taquez', linkedin: 'https://www.linkedin.com/in/esteban-garcia-taquez/', photo: estebanGarciaTaquez },
      { role: 'Developer', name: 'Andres Popoca', linkedin: 'https://www.linkedin.com/in/andres-popoca/', photo: andresPopoca },
      { role: 'Developer', name: 'Emilio Calvo', linkedin: 'https://www.linkedin.com/in/emilio-calvo-a14b222a4/', photo: emilioCalvo },
    ].map(withDescription),
    membersNote: '',
    // Joined from Northwestern SHPE with a few others to gain experience
    // before starting an app of their own back at Northwestern.
    pastContributors: [
      { role: 'Northwestern University | Developer', roleColor: '#4E2A84', name: 'Ariel Garcia', linkedin: 'https://www.linkedin.com/in/ariel-garcia27/', photo: arielGarcia },
      { role: 'Northwestern University | Developer', roleColor: '#4E2A84', name: 'Diego Perez Aguilar', linkedin: 'https://www.linkedin.com/in/diego-purr-agua/', photo: diegoPerezAguilar },
      { role: 'Lead', name: 'Giselle Lechuga', linkedin: 'https://www.linkedin.com/in/gisellelechuga/', photo: giselleLechuga },
      { role: 'Developer', name: 'Joselyn De Leora', linkedin: 'https://www.linkedin.com/in/joselyn-de-loera-/', photo: joselynDeLeora },
    ].map(withDescription),
  },
  {
    key: 'technical',
    label: 'Technical Team',
    leads: [
      { role: 'Technical Co-Chair', name: 'David Nyugen', email: 'technicalteam.shpe.uic@gmail.com', linkedin: 'https://www.linkedin.com/in/davidnguyen50/', photo: david },
      { role: 'Technical Co-Chair', name: 'Emilio Burgos', email: 'https://www.linkedin.com/in/emilio-burgos1/', linkedin: 'https://www.linkedin.com/in/emilio-burgos1/', photo: emilio },
    ].map(withDescription),
    members: [],
    membersNote: '',
    pastContributors: [],
  },
]

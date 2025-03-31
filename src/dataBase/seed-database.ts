async function main () {
  console.log('Seeding database...')
  // Add your seeding logic here
  console.log('Database seeded successfully!')

}

(async () => {
  try {
    await main()
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}
)()
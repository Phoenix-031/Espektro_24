import styles from './clubs.module.scss'

const Clubs = () => {
  return (
    <div className="border-2 border-red-600 w-full h-[100vh] bg-primary-dark">
        <div>
            <h1 className="text-4xl font-bold text-white">Clubs</h1>
        </div>

        <div className={styles.clubs__grid__container}>
            <div className={styles.clubs__inner__grid}>
                
            </div>
        </div>
    </div>
  )
}

export default Clubs
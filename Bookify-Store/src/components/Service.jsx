import React from 'react'
import styles from '../styles/Services.module.css'
import services from '../utils/services'

function Service() {
  return (
    <section className={styles.services}>
        <h2 className={styles.title}>Layanan Kami</h2>
        <div className={styles.cardContainer}>
            {services.map((service) => (
                <div key={service.id} className={styles.card}>
                    <h3 className={styles.cardTitle}>{service.name}</h3>
                    <p className={styles.cardDescription}>{service.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Service

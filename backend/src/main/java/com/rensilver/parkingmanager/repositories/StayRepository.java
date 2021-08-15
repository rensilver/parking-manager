package com.rensilver.parkingmanager.repositories;

import com.rensilver.parkingmanager.entities.Stay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StayRepository extends JpaRepository<Stay, Long> {
}

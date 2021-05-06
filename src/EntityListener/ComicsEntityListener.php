<?php


namespace App\EntityListener;


use App\Entity\Comics;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Symfony\Component\String\Slugger\SluggerInterface;

class ComicsEntityListener
{
    private SluggerInterface $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }

    public function prePersist(Comics $comics, LifecycleEventArgs $eventArgs)
    {
        $comics->computeSlug($this->slugger);
    }

    public function preUpdate(Comics $comics, LifecycleEventArgs $eventArgs)
    {
        $comics->computeSlug($this->slugger);
    }

}

<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ChapterRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ChapterRepository::class)
 *
 * @ApiResource(
 *     collectionOperations={
 *          "get"={"normalization_context"={"groups"="chapter:list"}}
 *     },
 *     itemOperations={"get"={"normalization_context"={"groups"="chapter:item"}}},
 *     paginationEnabled=false
 * )
 */
class Chapter
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *
     * @Groups({"chapter:list", "chapter:item"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     *
     * @Groups({"chapter:list", "chapter:item"})
     */
    private $number;

    /**
     * @ORM\Column(type="datetime")
     *
     * @Groups({"chapter:list", "chapter:item"})
     */
    private $addDate;

    /**
     * @ORM\ManyToOne(targetEntity=Comics::class, inversedBy="chapters")
     * @ORM\JoinColumn(nullable=false)
     */
    private $comics;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumber(): ?string
    {
        return $this->number;
    }

    public function setNumber(string $number): self
    {
        $this->number = $number;

        return $this;
    }

    public function getAddDate(): ?\DateTimeInterface
    {
        return $this->addDate;
    }

    public function setAddDate(\DateTimeInterface $addDate): self
    {
        $this->addDate = $addDate;

        return $this;
    }

    public function getComics(): ?Comics
    {
        return $this->comics;
    }

    public function setComics(?Comics $comics): self
    {
        $this->comics = $comics;

        return $this;
    }
}

<?php

namespace App\Model;

use PDO;
use App\Model\AbstractManager;

class SDMManager extends AbstractManager
{
    public const TABLE = 'sdm';

    public function insert(array $credentials): void
    {
        $statement = $this->pdo->prepare(
            "INSERT INTO " . static::TABLE .
                "(`pseudo`, `title`, `story`, `love`,`no_love`)
            VALUES(:pseudo, :title, :story, :love, :no_love) "
        );
        $statement->bindValue(':pseudo', $credentials['pseudo'], PDO::PARAM_STR);
        $statement->bindValue(':title', $credentials['titre'], PDO::PARAM_STR);
        $statement->bindValue(':story', $credentials['msg'], PDO::PARAM_STR);
        $statement->bindValue(':love', 0, PDO::PARAM_INT);
        $statement->bindValue(':no_love', 0, PDO::PARAM_INT);
        $statement->execute();
    }
}
